import React from "react";
import './MainLayout.scss';
import NavBar from "../component/navbar";
import LandingPage from "../modules/landingPage";
import ContentBar from "../component/contentBar";
import ServicesPage from "../modules/servicesPage";
import WorkPage from "../modules/workPage";
import Footer from "../component/footer";
import ContactPage from "../modules/contactPage";
import TestiMoneyPage from "../modules/testimoneyPage";
import PortFolioPage from "../modules/portfolioPage";

export default function MainLayout() {
    return (
        <>
            <div className="MLD">
                <NavBar />
            </div>
            <div className="MLD">
                <LandingPage />
            </div>
            <div>
                <ContentBar />
            </div>
            <div className="MLD cb">
                <ServicesPage />
            </div>
            <div className="MLD">
                <WorkPage/>
            </div>
            <div className="MLD tb">
                <TestiMoneyPage/>
            </div>
            <div className="MLD">
                <PortFolioPage/>
            </div>
            <div className="MLD cb">
                <ContactPage/>
            </div>
            <div className="MLD">
                <Footer/>
            </div>
        </>

    );
}