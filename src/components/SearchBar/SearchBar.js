import styled from '@emotion/styled';
import Search from '../../assets/Search.png';
import placeholder from '../../assets/Placeholder.png';
import { useState } from 'react';
// import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

let SearchGlobal = styled.div({
    height: 80,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 6,
})

let Label = styled.label({
    fontSize: 16,
    fontWeight: 700,
})

export let Input = styled.input({
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '30px',
    height: '100%',
    border: 'none',
    padding: '0 0 0 60px',
    borderRight: 'solid 1px #F2F2F2',
    fontSize: 16,
    color: '#19202D',
})

let Checkbox = styled.input({
    marginLeft: 32,
})


export let Button = styled.button`
    margin-left: 26px;
    width: 123px;
    height: 48px;
    background-color: #5964E0;
    color: white;
    font-size: 16px;
    font-weight: 700;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    &:hover {
        transition: all .5s;
        background-color: #939BF4;
    }
`
let Container = styled.div({
    marginLeft: 165,
    marginRight: 165,
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: -40,
})


const SearchBar = () => {
    const [jobs, setJobs] = useState([]);
    const [position, setPosition] = useState('');
    const [contract, setContract] = useState('');
    const [location, setLocation] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `http://localhost:8080/jobs?position=${position}&contract=${contract}&location=${location}`;
        const response = await fetch(url);
        const data = await response.json();
        setJobs(data);
        console.log(data)
    };

    return (
        <Container>
            <SearchGlobal>
                {/* <form onSubmit={handleSubmit}> */}
                <Label>
                    <Input
                        placeholder='Filter by title, companies,  expertise…'
                        style={{ backgroundImage: `url(${Search})`, width: '32%', borderRadius: '6px 0 0 6px' }}
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}

                    />
                </Label>
                <Label>
                    <Input
                        placeholder='Filter by location…'
                        type="text"
                        style={{
                            backgroundImage: `url(${placeholder})`,
                            width: '25%'

                        }}
                        value={location}
                        onChange={(e) => setLocation(e.target.value)} />
                </Label>

                <Checkbox type='checkbox' />
                <Label style={{ marginLeft: 16 }}
                    value={contract}
                    onChange={(e) => setContract(e.target.value)}>Full Time Only</Label>
                <Link style={{ textDecoration: 'none' }} to={`/searchjob`}>
                    <Button type='submit' >Search</Button>
                </Link>
                {/* </form> */}
            </SearchGlobal>
        </Container>
    );
};

export default SearchBar;