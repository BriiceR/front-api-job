import styled from '@emotion/styled';
import img from "../../assets/Triangle.png"
import "../../fonts/kumbh-sans-v20-latin-regular.ttf";
import "../../fonts/kumbh-sans-v20-latin-700.ttf";
import './index.css';
import Sun from "../../assets/Sun.png";
import Moon from "../../assets/Moon.png";
import { Link } from "react-router-dom";

let Container = styled.div({
    marginLeft: 165,
    marginRight: 165,
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 46,
})

let Header = styled.div({
    height: 162,
    with: 'auto',
    backgroundSize: 'cover',
    justifyContent: 'space-between',
})

let Title = styled.h2({
    color: 'white',
    fontSize: 32,
    // fontFamily: 'Kumbh Sans',
    fontStyle: 'normal',
    fontWeight: 700,
    margin: 0,
})

let ImgToggleGlobal = styled.div({
    display: 'flex',
    marginTop: 7,
})

let ImgToggle = styled.div({
    width: 18,
    height: 18,
    backgroundSize: 'cover',
    marginRight: 16,
    marginLeft: 16,
    marginTop: 5,
})

const MainHeader = () => {



    return (

        <Header style={{ backgroundImage: `url(${img})` }}>
            <Container>
                <Link style={{ textDecoration: 'none' }} to="/" >
                    <Title>devjobs</Title>
                </Link>
                <ImgToggleGlobal>
                    <ImgToggle style={{ backgroundImage: `url(${Sun})` }}></ImgToggle>
                    <label className="switch">
                        <input type="checkbox" />
                        <span></span>
                    </label>
                    <ImgToggle style={{ backgroundImage: `url(${Moon})` }}></ImgToggle>
                </ImgToggleGlobal>

            </Container>
        </Header>

    )
}

export default MainHeader;