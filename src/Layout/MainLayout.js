import MyNavbar from '../components/MyNavbar.js' 

function MainLayout(props) {
  return (
    <div>
        <MyNavbar />
        {props.children}
    </div>
  );
}

export default MainLayout;