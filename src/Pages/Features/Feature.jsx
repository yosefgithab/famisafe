import React, { PureComponent } from 'react'
import CallsAndMessages from './Calls&Messages'
import ScreenTime from './ScreenTime'
import ScreenViwer from './Screen-Viwer'
import AppRole from './AppRole'
import OneWayAudio from './OneWayAudio'
import ActivityReport from './ActivityReport'
import TiktokHistory from './ContentSefty/TiktokHistory'
import DetectSuspiciousphotos from './ContentSefty/DetectSuspiciousphotos'
import Detectsuspicioustext from './ContentSefty/Detectsuspicioustext'
import BlockWebsites from './ContentSefty/BlockWebsites'
import BrowserHistory from './ContentSefty/BrowserHistory'
import LocationTraking from './LocationService/LocationTraking'
import SOSAlart from './LocationService/SOSAlart'
import YoutubeParentalControl from './ContentSefty/YoutubeParentalControl'
import WebFilter from './ContentSefty/webFilter'
import DirivingReport from './LocationService/DirivingReport'

export default class Feature extends PureComponent {
    render() {
        return (
            <div>
                {/* Device Activity */}
                <CallsAndMessages />
                <ScreenTime />
                <ScreenViwer />
                <AppRole />
                <OneWayAudio />
                <ActivityReport />
                {/* ====== content sefty ===== */}
                
                <YoutubeParentalControl/>
                <TiktokHistory />
                <DetectSuspiciousphotos />
                <Detectsuspicioustext />
                <BlockWebsites />
                <WebFilter/>
                <BrowserHistory />
                {/* location Service */}
                <DirivingReport/>
                <LocationTraking/>
                <SOSAlart/> 
                {/*====== Blogs ====== */}
            </div>
        )
    }
}
