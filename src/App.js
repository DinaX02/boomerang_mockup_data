import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Homepage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import Publicar from "./pages/Publicar";
import Profile from "./pages/Profile_v2";
import '../src/components/components.css';
import ProgressPublish2 from "./components/ProgressPublish/ProgressPublish2";
import ProgressPublish3 from "./components/ProgressPublish/ProgressPublish3";
import ProgressPublish4 from "./components/ProgressPublish/ProgressPublish4";
import ProgressPublish5 from "./components/ProgressPublish/ProgressPublish5";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import OnBoarding from "./pages/OnBoarding";
import RentDate from "./pages/RentDate";
import SignUpPage from "./pages/SignUpPage";
import Vouchers from "./pages/Vouchers";
import AlugarMorada from "./pages/AlugarMorada";
import AdicionarMorada from "./pages/AdicionarMorada";
import RentDetails from "./pages/RentDetails";
import ArticlePage from "./pages/ArticlePage";
import Chat from "./pages/Chat";
import AddAdressComponent from "./components/AddAdressComponent"
import ChooseAdressComponent from "./components/ChooseAdressComponent"
import AlugarDetalhes from "./pages/AlugarDetalhes";
import DownloadPage from "./pages/DownloadPage";
import AlugarValorTotal from "./pages/AlugarValorTotal";
import MetodoPagamento from "./pages/MetodoPagamento";
import AddMetPagamento from "./pages/AddMetPagamento";
import AlugarProgresso from "./pages/AlugarProgresso";
import Results from "./pages/Results";
import RecompensasParaAddAmigos from "./pages/RecompensasParaAddAmigos";
import ConvidarAmigosPage from "./pages/ConvidarAmigosPage";
import AvaliarAluguerPage from "./pages/AvaliarAluguerPage";
import VerTudo from "./pages/VerTudo";
import EditProfile from "./pages/EditProfile";
import EditEmail from "./pages/EditEmail";
import ProfileOthersViewPage from "./pages/ProfileOthersViewPage";
import FAQ from "./pages/FAQ.js";
import ContactarSuporte from "./pages/ContactarSuporte";
import SobreNos from "./pages/SobreNos.js";
import HomepageGeral from "./pages/HomepageGeral.js";

function App() {


  
  return (
    <div className="App">
<BrowserRouter>
      <Routes>
        <Route path="/" element={<HomepageGeral/>}></Route>
        <Route path="/onBoarding" element={<OnBoarding/>}></Route>
        <Route path="/sign-up-page" element={<SignUpPage/>}></Route>
        <Route path="/search-page" element={<SearchPage/>}></Route>
        <Route path="/publicar-page" element={<Publicar/>}></Route>
        <Route path="/profile-page" element={<Profile/>}></Route>
        <Route path="/profile-view-page/:id" element={<ProfileOthersViewPage/>}></Route>
        <Route path="/article/:id" element={<ArticlePage/>}></Route>
        <Route path="/chat" element={<Chat/>}></Route>
        <Route path="/results" element={<Results />} />
        <Route path="/settings-page" element={<Settings/>}></Route>
        <Route path="/edit-profile-page" element={<EditProfile/>}></Route>
        <Route path="/edit-email-page" element={<EditEmail/>}></Route>
        <Route path="/progressPublish-2" element={<ProgressPublish2/>}></Route>
        <Route path="/progressPublish-3" element={<ProgressPublish3/>}></Route>
        <Route path="/progressPublish-4" element={<ProgressPublish4/>}></Route>
        <Route path="/progressPublish-5" element={<ProgressPublish5/>}></Route>
        <Route path="/notifications-page" element={<Notifications/>}></Route>
        <Route path="/rentdate-page/:id" element={<RentDate/>}></Route>
        <Route path="/vouchers-page" element={<Vouchers/>}></Route>
        <Route path="/alugar-morada" element={<AlugarMorada/>}></Route>
        <Route path="/adicionar-morada" element={<AdicionarMorada/>}></Route>
        <Route path="/rentdetails-page" element={<RentDetails/>}></Route>
        <Route path="/add-adress-publish" element={<ChooseAdressComponent/>}></Route>
        <Route path="/adress-publish" element={<AddAdressComponent/>}></Route>
        <Route path="/alugar-detalhes" element={<AlugarDetalhes/>}></Route>
        <Route path="/download-page" element={<DownloadPage/>}></Route>
        <Route path="/valor-total" element={<AlugarValorTotal/>}></Route>
        <Route path="/metodo-pagamento" element={<MetodoPagamento/>}></Route>
        <Route path="/adicionar-pagamento" element={<AddMetPagamento/>}></Route>
        <Route path="/alugar-progresso" element={<AlugarProgresso/>}></Route>
        <Route path="/ver-tudo" element={<VerTudo/>}></Route>
        <Route path="/recompensas" element={<RecompensasParaAddAmigos/>}></Route>
        <Route path="/convidar-amigos" element={<ConvidarAmigosPage/>}></Route>
        <Route path="/avaliar-aluguer" element={<AvaliarAluguerPage/>}></Route>
        <Route path="/faq-perguntas-frequentes" element={<FAQ/>}></Route>
        <Route path="/contactar-suporte" element={<ContactarSuporte/>}></Route>
        <Route path="/sobre-nos" element={<SobreNos/>}></Route>
      </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
