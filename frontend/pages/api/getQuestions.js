import { Configuration, OpenAIApi } from 'openai';
import { NextApiRequest, NextApiResponse } from 'next';

const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

async function generateQuestions(subject, exam_board, qualification, topic) {
  const questions = [];

  for (let i = 1; i <= 6; i++) {
    const questionPrompt = `Generate a ${subject} question for a ${qualification} ${exam_board} exam on the topic of ${topic}.`;
    const { data } = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: questionPrompt,
      temperature: 0.5,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });

    const question = data.choices[0].text.trim();
    questions.push(question);
  }

  return questions;
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { subject, topic, exam_board, qualification } = req.body;

    try {
      const questions = await generateQuestions(subject, exam_board, qualification, topic);
      res.status(200).json({  questions,
        subject,
        exam_board,
        qualification,
        topic});
      console.log(`This is print out from the api ${questions}`)
      console.log(`This is print out from the api ${subject}
        ${exam_board}
        ${qualification},
        ${topic}`)
    } catch (error) {
      res.status(500).json({ error: 'Failed to generate questions' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }

 
}
