import Flashcards from '../../components/Flashcards/Flashcards';
import Footer from '../../components/tests/Footer';
import DashboardNav from '../../components/dashboard/DashboardNav';


export default function FlashcardsPage(){
    return(
        <div>
            <DashboardNav/>
            <Flashcards>
            <ul role="list" className="mt-6 space-y-4">
                   { {/* {questions.map((question) => (
                      <li key={question.name}>
                        <a  className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                          {question.name}
                        </a>
                      </li>
                    ))} */}}
                  </ul>
            </Flashcards>
            

<Footer/>
        </div>
    )
}