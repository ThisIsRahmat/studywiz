import Flashcards from '../components/ui/Flashcards';
import Footer from '../components/ui/Footer';
import DashboardNav from '../components/ui/DashboardNav';
import Header from '../components/ui/Header'

export const getServerSideProps = async ({ query }) => {
  // query should have subject, topic, exam_board, and qualification
  const response = await fetch("/api/getQuestions",
  //  {
  //   body: JSON.stringify(query),
  // }
  
  );
  
  const data = await response.json();
  const questions = data["questions"];

  return {
    props: {
      questions,
    }
  };

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }


};

export default function FlashcardsPage({questions}){

    return(
        <div>
            {/* <DashboardNav/> */}
            <Header/>
            <Flashcards>
            <ul role="list" className="mt-6 space-y-4">
                   {questions && questions.map((question) => (
                      <li key={question.name}>
                        <a  className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                          {question.name}
                        </a>
                      </li>
                    ))} 
                  </ul>
            </Flashcards>
            

<Footer/>
        </div>
    )
}