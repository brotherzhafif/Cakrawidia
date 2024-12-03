import { Head } from "@inertiajs/react";
import LayoutApp from "@/Layouts/LayoutApp.jsx";
import Navbar from "@/partials/Navbar.jsx";
import GridHome from "@/Layouts/GridHome.jsx";
import Leaderboard from "@/Components/Leaderboard.jsx";
import AskingListCard from "../Components/QuestionsListCard.jsx";
import TopicsCategory from "@/Components/TopicsCategory.jsx";
import Footer from "@/partials/Footer.jsx";

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <LayoutApp>
                <Navbar />
                <GridHome>
                    <TopicsCategory />
                    <AskingListCard />
                    <Leaderboard />
                </GridHome>
                <Footer />
            </LayoutApp>
        </>
    );
}