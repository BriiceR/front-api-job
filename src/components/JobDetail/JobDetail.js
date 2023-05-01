import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import MainHeader from "../Header/Header";
import styled from '@emotion/styled';
import JobDetailContent from "../JobDetailContent/JobDetailContent";
import JobDetailFooter from "../JobDetailFooter/JobDetailFooter";

export let ContainerDetail = styled.div({
    marginRight: 355,
    marginLeft: 355,
})

export let HeadDetailGlobal = styled.div({
    width: '100%',
    height: 'auto',
    backgroundColor: 'white',
    marginTop: -40,
    marginBottom: 32,
    display: 'flex',
    borderRadius: '0 6px 6px 6px',
})

let ImgDetail = styled.img({
    width: 140,
    height: 140,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '0 0 0 6px',
})

let CompanyName = styled.h2({
    marginTop: 42,
})

let CompanySite = styled.p({
    color: '#6E8098',
})

let CompanyButton = styled.button`
margin-top: 46px;
width: 147px;
height: 48px;
background-color: #EEEFFC;
color: #5964E0;
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

let ContainerHeaderCompany = styled.div({
    paddingLeft: 40,
    paddingRight: 40,
    display: 'flex',
    justifyContent: 'space-between',
    width: '70%',

})

function JobDetail() {
    const { id } = useParams();
    const { datas, isLoading, error } = useFetch(`http://localhost:8080/jobs/${id}`);

    const company = datas && datas.length > 0 ? datas[0].company : '';
    const logo = datas && datas.length > 0 ? datas[0].logo : '';
    const logoBackground = datas && datas.length > 0 ? datas[0].logoBackground : '';
    const website = datas && datas.length > 0 ? datas[0].website : '';



    console.log(datas)

    if (error) {
        return <p>{error}</p>;
    }

    if (isLoading) {
        return <div className="loader"></div>;
    }

    return (
        <>
            <MainHeader />
            <ContainerDetail>
                <HeadDetailGlobal>
                    <ImgDetail style={{ backgroundImage: `url(${logo})`, backgroundColor: `${logoBackground}` }} />
                    <ContainerHeaderCompany>
                        <div>
                            <CompanyName>{company}</CompanyName>
                            <CompanySite>{company}.com</CompanySite>
                        </div>
                        <a href={`${website}`} target="_blank">
                            <CompanyButton>Company Site</CompanyButton>
                        </a>
                    </ContainerHeaderCompany>
                </HeadDetailGlobal>
            </ContainerDetail>

            <JobDetailContent />
            <JobDetailFooter />

        </>

    )
}

export default JobDetail;