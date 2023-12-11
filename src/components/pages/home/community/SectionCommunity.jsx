import './CommunityStyle.css'
import communityX from "./CommunityAssets/community-x.png"
import communityTelegram from "./CommunityAssets/community-telegram.png"
import communityInstagram from "./CommunityAssets/community-instagram.png"
import communityDiscord from "./CommunityAssets/community-discord.png"
import communityHeart from "./CommunityAssets/community-heart.png"
import communityBell from "./CommunityAssets/community-bell.png"
import communityComment from "./CommunityAssets/community-comment.png"
import communitySpeaker from "./CommunityAssets/community-speaker.png"
import communityDots from "./CommunityAssets/community-dots.png"
import StaticCard from './StaticCard'
import CarouselCard from './CarouselCard'

const SectionCommunity = () => {
    return (
        <div className="community theme-change light-theme">
            <img src={communityX} alt="" width="280" height="280" className="community-bg-img left" id="community-bg-x"/>
            <img src={communityTelegram} alt="" width="260" height="260" className="community-bg-img left" id="community-bg-tg"/>
            <img src={communityInstagram} alt="" width="290" height="290" className="community-bg-img left" id="community-bg-ig"/>
            <img src={communityDiscord} alt="" width="250" height="250" className="community-bg-img left" id="community-bg-dis"/>
            <img src={communityHeart} alt="" width="80" height="80" className="community-bg-img right" id="community-bg-heart"/>
            <img src={communityBell} alt="" width="270" height="270" className="community-bg-img right" id="community-bg-bell"/>
            <img src={communityComment} alt="" width="180" height="180" className="community-bg-img right" id="community-bg-comment"/>
            <img src={communitySpeaker} alt="" width="350" height="350" className="community-bg-img right" id="community-bg-speaker"/>
            <img src={communityDots} alt="" width="150" height="150" className="community-bg-img right" id="community-bg-dots"/>

            <div className='community-container theme-change light-theme'>
                <div><h2>Join our <span className="color-change">Community</span></h2></div>
                <div><h3>Together we can make the PancakeSwap community even stronger</h3></div>
                <div className="community-cards theme-change light-theme"> 
                    <StaticCard />
                    <CarouselCard />
                </div>
            </div>
        </div>
    );
};

export default SectionCommunity;
