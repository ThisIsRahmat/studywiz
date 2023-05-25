import TestForm from '../components/ui/Form';
import Footer from '../components/ui/Footer';
//import DashboardNav from '../components/dashboard/DashboardNav';
import Header from "../components/ui/Header"
export default function TestPage(){
    return(
        <div>
          <Header/>
            {/* <DashboardNav/> */}
<TestForm/>
<Footer/>
        </div>
    )
}