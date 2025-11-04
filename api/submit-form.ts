import { Client } from '@notionhq/client';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = req.body;
    const {
      firstName,
      lastName,
      email,
      phone,
      organization,
      industry,
      experience,
      resourceDownloaded
    } = body;

    // Initialize Notion client
    const notion = new Client({
      auth: process.env.NOTION_API_KEY,
    });

    // Add lead to Notion database
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID!,
      },
      properties: {
        'Name': {
          title: [
            {
              text: {
                content: `${firstName} ${lastName}`,
              },
            },
          ],
        },
        'Email': {
          email: email,
        },
        'Phone': {
          phone_number: phone || '',
        },
        'Organization': {
          rich_text: [
            {
              text: {
                content: organization || '',
              },
            },
          ],
        },
        'Industry': {
          select: {
            name: industry || 'Not specified',
          },
        },
        'Experience': {
          select: {
            name: experience || 'Not specified',
          },
        },
        'Resource Downloaded': {
          rich_text: [
            {
              text: {
                content: resourceDownloaded || 'Contact Form Submission',
              },
            },
          ],
        },
        'Date': {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    });

    // TODO: Send email with PDF if resourceDownloaded is set
    // We'll implement this next

    return res.status(200).json({
      success: true,
      message: 'Form submitted successfully'
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    return res.status(500).json({
      error: 'Failed to submit form',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
