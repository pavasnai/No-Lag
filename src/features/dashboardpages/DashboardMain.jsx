import DashboardLeftNav from '../dashboardpages/dashboardleftnav';
import DashboardRight from '../dashboardpages/DashboardRight';
export default function DashboardMain() {
    return (
        <div>
            <div>
                <DashboardLeftNav />
            </div>
            <div>
                <DashboardRight />
            </div>
        </div>
    );
}
