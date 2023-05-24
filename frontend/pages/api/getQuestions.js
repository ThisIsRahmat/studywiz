import { Configuration, OpenAIApi } from 'openai';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';


 

const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

export async function generateQuestions(subject, exam_board, qualification, topic) {
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

    const question = data.choices[0].text;
    questions.push(question);
  }

  return questions;
                               
}

export default async function handler(req, res) {

    const { subject, topic, exam_board, qualification } = req.body;

    const questions = await generateQuestions(subject, exam_board, qualification, topic);

    console.log(questions);
    console.log()

    
  

    res.status(200).json({ questions });
    
    
// try {
//     res.redirect(307, '/test');
//   } catch (err) {
//     res.status(500).send({ error: 'failed to fetch data' });

// }
}

 