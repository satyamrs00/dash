import dashboard from '../../assets/svgs/dashboard_icon.svg';
import transactions from '../../assets/svgs/transaction_icon.svg';
import schedules from '../../assets/svgs/schedule_icon.svg';
import users from '../../assets/svgs/user_icon.svg';
import settings from '../../assets/svgs/setting_icon.svg';
import { useState } from 'react';

const Sidebar = () => {
    const menu = [
        { name: 'Dashboard', icon: dashboard },
        { name: 'Transactions', icon: transactions },
        { name: 'Schedules', icon: schedules },
        { name: 'Users', icon: users },
        { name: 'Settings', icon: settings },
    ];
    const [active, setActive] = useState(0);

    return (
        <div className="flex flex-col w-56 self-stretch px-6 py-8 bg-black text-white rounded-3xl m-8">
            <div className="text-4xl font-bold">
                Board.
            </div>
            <div className="flex flex-col mt-8 gap-4">
                {menu.map((item, index) => (
                    <div key={index} className={"flex gap-4 items-center cursor-pointer" + (index === active ? " font-bold" : "")} onClick={() => setActive(index)}>
                        <img src={item?.icon} alt="dashboard" className="w-4 h-4 inline-block" />
                        {item?.name}
                    </div>
                ))}            
            </div>
            <div className="flex flex-col mt-auto gap-4 text-sm">
                <div className="cursor-pointer">
                    Help
                </div>
                <div className="cursor-pointer">
                    Contact Us
                </div>
            </div>
        </div>
    );
}

export default Sidebar;