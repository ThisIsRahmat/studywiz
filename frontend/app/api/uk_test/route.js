import { Configuration, OpenAIApi } from 'openai';
import { NextApiRequest, NextApiResponse } from 'next'


const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));


if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing env var from OpenAI");
}


export async function generateQuestionsWithStyle(subject, exam_board, qualification_level, style, topic) {
  const questions = [];

  for (let i = 1; i <= 6; i++) {
    const questionPrompt = `Generate a ${style} ${subject} question for a ${qualification_level} ${exam_board} exam on the topic of ${topic}. {}`;
    const { data } = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `\n\nQ: ${questionPrompt}\nA:`,
      temperature: 0.5,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ['{}'],
    });

    const question = data.choices[0].text;
    questions.push(question);
  }

  return questions;
}


export async function generateQuestions(subject, exam_board, qualification_level, topic) {
  const questions = [];

  for (let i = 1; i <= 6; i++) {
    const questionPrompt = `Generate a ${subject} question for a ${qualification_level} ${exam_board} exam on the topic of ${topic}. {}`;
    const { data } = await openai.createCompletion.create({
      model: 'text-davinci-003',
      prompt: questionPrompt,
      temperature: 0.5,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ['{}'],
    });

    const question = data.choices[0].text;
    questions.push(question);
  }

  return questions;
}
export default async function handler(req, res) {


  if (req.method !== 'POST') {
    res.status(405).end(); // Method Not Allowed
    return;
  }

  const { question_style, subject, topic, exam_board, qualification } = req.body;

  const questions = await generateQuestionsWithStyle(subject, exam_board, qualification, question_style, topic);

  console.log(questions);

  res.status(200).json({ questions });
}
