import MainSection from './Section-1_Main-Head';
import PMSection from './Section-2_PM-Section';
import PricingSection from './Section-3_Pricing';
import Footer from './Footer'

const index = ():JSX.Element => {
  // In this page we are going to handle our popup states within here
  return (
    <main>
      {/* Main section 1 */}
        <MainSection />
        {/* Project Management Pitch section */}
        <PMSection />
        {/* application pricing section */}
        <PricingSection />
        {/* Footer */}
        <Footer />
    </main>
  )
}

export default index