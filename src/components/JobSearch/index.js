import MainHeader from "../Header/Header";
import Card from "../Card/Card";
import styled from '@emotion/styled';
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";


let FlexCard = styled.div({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px 30px',
    marginLeft: 165,
    marginRight: 165,
    marginTop: 105,
})

let Button = styled.button`
    margin-top: 56px;
    margin-bottom: 104px;
    width: 123px;
    height: 48px;
    background-color: #5964E0;
    color: white;
    font-size: 16px;
    font-weight: 700;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    justify-content: center;
    &:hover {
        transition: all .5s;
        background-color: #939BF4;
    }
`

let ButtonCenter = styled.div({
    display: 'flex',
    justifyContent: 'center',
})

let EndOfJobs = styled.p({
    marginTop: 56,
    marginBottom: 104,
    color: 'salmon',
    fontSize: 16,
    fontWeight: 700,
})



function JobSearch() {

    const [searchParams, setSearchParams] = useState({
        position: '',
        contract: '',
        location: '',
        company: '',
    });
    const [jobs, setJobs] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    fetch(`http://localhost:8080/jobs/`)
        .then(response => response.json())
        .then(data => {
            setJobs(data);
            setIsLoading(false);
        })
        .catch(error => {
            setError(error.message);
            setIsLoading(false);
        });
    console.log(jobs)

    const [Count, setCount] = useState(12);

    const handleLoadMore = () => {
        setCount(Count + 12);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setCount(12);
        setIsLoading(true);
        setError(null);
    };
    const handleSearchChange = (e) => {
        setSearchParams({
            ...searchParams,
            [e.target.name]: e.target.value,
        });


    };



    return (
        <>
            <MainHeader />
            <form onSubmit={handleSearchSubmit}>
                <SearchBar handleSearchChange={handleSearchChange} />
            </form>
            <div style={{ textAlign: 'center' }}>
                <Link style={{ textDecoration: 'none' }} to={'/createjob'} >
                    <Button style={{ margin: 20 }}>Add Job</Button>
                </Link>
            </div>

            <FlexCard >
                {
                    error ? (
                        <p>{error}</p>
                    ) : isLoading ? (
                        <div className="loader"></div>
                    ) : (
                        jobs

                            .slice(-Count)
                            .reverse()
                            .map((data) => (
                                <Link style={{ textDecoration: 'none' }} to={`/${data._id}`} key={data.id}>
                                    <Card key={`article-${data.id}`} data={data} />
                                </Link>
                            ))
                    )
                }</FlexCard>
            <ButtonCenter>
                {Count >= jobs.length ? (
                    <EndOfJobs>End of Jobs</EndOfJobs>
                ) : (
                    <Button onClick={handleLoadMore}>Load More</Button>
                )}
            </ButtonCenter>
        </>

    )
}

export default JobSearch;