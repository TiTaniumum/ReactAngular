import Header from "./components/Header/Header"
import InfoSection from "./components/InfoSection/InfoSection"
import ListingSection from "./components/ListingSection/ListingSection"
import MainSection from "./components/MainSection/MainSection"
import WhyCollege from "./components/WhyCollege/WhyCollege"
import WhyItStep from "./components/WhyItStep/WhyItStep"

function App() {
  return (
    <>
      <Header/>
      <main>
        <MainSection/>
        <InfoSection/>
        <ListingSection/>
        <WhyCollege/>
        <WhyItStep/>
      </main>
      <footer></footer>
    </>
  )
}

export default App
