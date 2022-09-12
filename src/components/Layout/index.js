import './index.scss';
import Sidebar from '../sidebar';
import { Outlet } from 'react-router-dom'


const Layout = () => {
    return (
    <div className='App'>
    <div className='page'>
        <Sidebar />
        <span className='tags top-tags'>
            &lt;body&gt;
            <br />
            <span className='top-tag-html'>
        &lt;html&gt;
        </span>
            </span>

        <Outlet />

        <span className='tags bottom-tags'>
        &lt;body&gt;
        <br />
        <span className='bottom-tag-html'>
        &lt;html&gt;
        </span>
        </span>
    </div>
    </div>
    )
};

export default Layout;