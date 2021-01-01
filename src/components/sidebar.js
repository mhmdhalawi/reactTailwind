import { useState } from 'react';
import { Link } from 'react-router-dom';
import { sideBarData } from './sidebarData';

export default function Sidebar({ history }) {
  const [active, setActive] = useState();
  return (
    <div className="flex flex-col w-1/4  h-screen">
      {sideBarData.map((data, key) => {
        return (
          <Link
            onClick={() => setActive(data.link)}
            key={key}
            to={data.link}
            className={`btn text-center mt-2 ${
              data.link === active
                ? ' bg-rose-800 hover:bg-rose-600'
                : ' bg-rose-400 hover:bg-rose-600'
            } `}
          >
            {data.name}
          </Link>
        );
      })}
    </div>
  );
}
