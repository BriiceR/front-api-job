import styled from '@emotion/styled';
import { ContainerDetail } from '../JobDetail/JobDetail';
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Button } from '../SearchBar/SearchBar';
import { Link } from "react-router-dom";

let ContainerFooter = styled.div({
    width: '100%',
    backgroundColor: 'white',
    height: 100,
})

let TitleFooter = styled.h2({
    fontSize: 20,
    fontWeight: 700,
})

function JobDetailFooter() {
    const { id } = useParams();
    const { datas, isLoading, error } = useFetch(`http://localhost:8080/jobs/${id}`);


    const position = datas && datas.length > 0 ? datas[0].position : '';
    const apply = datas && datas.length > 0 ? datas[0].apply : '';

    const handleDelete = async () => {
        const response = await fetch(`http://localhost:8080/jobs/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            console.log('delete ok');

        } else {
            console.error('Erreur delete');
        }
    };

    if (error) {
        return <p>{error}</p>;
    }

    if (isLoading) {
        return <div className="loader"></div>;
    }


    return (
        <ContainerFooter>
            <ContainerDetail style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 12 }}>
                <TitleFooter>{position}</TitleFooter>

                <a href={`${apply}`} target="_blank">
                    <Button style={{ margin: '20px 0 0 0' }}>Apply Now</Button>
                </a>
                <Link style={{ textDecoration: 'none' }} to={`/updatejob/${id}`} >
                    <Button style={{ margin: '20px 0 0 0', backgroundColor: 'green' }} >Update</Button>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/" >
                    <Button style={{ margin: '20px 0 0 0', backgroundColor: 'salmon' }} onClick={handleDelete}>Delete</Button>
                </Link>
            </ContainerDetail>

        </ContainerFooter>
    )
}

export default JobDetailFooter;