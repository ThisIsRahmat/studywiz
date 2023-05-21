import { Configuration, OpenAIApi } from 'openai';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { render } from 'react-dom';
import axios from "axios";

const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

export async function generateQuestionswithstyle(subject, examBoard, qualificationLevel, style, topic) {
  const questions = [];

  for (let i = 1; i <= 6; i++) {
    const questionPrompt = `Generate a ${style} ${subject} question for a ${qualificationLevel} ${examBoard} exam on the topic of ${topic}. {}`;
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

export default async function POST(req, res) {

    const { question_style, subject, topic, exam_board, qualification } = req.body;

    const questions = await generateQuestions(subject, exam_board, qualification, question_style, topic);

    console.log(questions);

    return NextResponse.json({ questions });
    
// try {
//     res.redirect(307, '/$flashcards');
//   } catch (err) {
//     res.status(500).send({ error: 'failed to fetch data' });

}
