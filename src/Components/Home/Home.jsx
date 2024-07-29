import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import HomePageBanner from "../HomePageBanner/HomePageBanner";
import JobCategoryLIst from "../JobCategoryList/JobCategoryLIst";


const Home = () => {
    return (
        <div>
            <HomePageBanner></HomePageBanner>
            <JobCategoryLIst></JobCategoryLIst>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;