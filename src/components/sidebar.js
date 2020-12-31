import { Link } from 'react-router-dom';
import { sideBarData } from './sidebarData';

export default function Sidebar({ active }) {
  return (
    <div>
      {sideBarData.map((data, key) => {
        return (
          <Link
            key={key}
            to={`${data.link}`}
            className={`btn ${
              data.link === active ? ' bg-rose-800 hover:bg-rose-600' : ' bg-rose-400 hover:bg-rose-600'
            } `}
          >
            {data.name}
          </Link>
        );
      })}
    </div>
  );
}
