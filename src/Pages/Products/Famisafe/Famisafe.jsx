import React, { PureComponent } from 'react'
import HeroSection from './FamisafeHome'
import StorySection from './RealStories'
import ParentsReviews from './StatesSection'
import CommunitySection from './CommunitySection'
import SecuritySection from './SecuritySection'
import FamiSafeHero from './StartFamiSafe'

export default class Famisafe extends PureComponent {
    render() {
        return (
            <div>
                <HeroSection />
                <StorySection />
                <ParentsReviews />
                <CommunitySection />
                <SecuritySection />
                <FamiSafeHero />
            </div>
        )
    }
}
