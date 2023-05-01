import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import styled from '@emotion/styled';
import { TextCard, Location } from '../Card/Card';
import { ContainerDetail, HeadDetailGlobal } from '../JobDetail/JobDetail';
import { Button } from '../SearchBar/SearchBar';


let TitleJob = styled.h1({
    margin: 0,
    fontSize: 28,
    fontWeight: 700,
})

let ContainerContent = styled.div({
})

let TitleContent = styled.h2({
    color: '#19202D',
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 32,
})

let UlContent = styled.ul({
    padding: 12,
    margin: 0,
})

let OlContent = styled.ol({
    padding: 12,
    margin: 0,
})

let LiContent = styled.li`
    margin: 16px;
    &::marker {
        margin-right: 8px;
        color: #5964E0;
    }
`

let PContent = styled.p({
    lineHeight: 1.6,
    marginBottom: 32,
})

function JobDetailContent() {
    const { id } = useParams();
    const { datas, isLoading, error } = useFetch(`http://localhost:8080/jobs/${id}`);

    const position = datas && datas.length > 0 ? datas[0].position : '';
    const location = datas && datas.length > 0 ? datas[0].location : '';
    const positionAt = datas && datas.length > 0 ? datas[0].positionAt : '';
    const contract = datas && datas.length > 0 ? datas[0].contract : '';
    const description = datas && datas.length > 0 ? datas[0].description : '';
    const requirements = datas && datas.length > 0 ? datas[0].requirements : '';
    const reqItems = datas && datas.length > 0 ? datas[0].requirements.items : '';
    const role = datas && datas.length > 0 ? datas[0].role : '';
    const rolItems = datas && datas.length > 0 ? datas[0].role.items : '';
    const apply = datas && datas.length > 0 ? datas[0].apply : '';

    // console.log(datas)

    if (error) {
        return <p>{error}</p>;
    }

    if (isLoading) {
        return <div className="loader"></div>;
    }

    return (
        <>

            <ContainerDetail>
                <HeadDetailGlobal style={{ width: 'auto', padding: 48, marginTop: 32, borderRadius: 6, justifyContent: 'space-between' }}>
                    <ContainerContent>
                        <TextCard style={{ margin: '8px 0' }}>{positionAt} . {contract ? 'Full Time' : 'Part Time'}</TextCard>
                        <TitleJob>{position}</TitleJob>
                        <Location style={{ margin: '8px 0' }}>{location}</Location>
                    </ContainerContent>
                    <a href={`${apply}`} target="_blank">
                        <Button style={{ marginTop: 20 }}>Apply Now</Button>
                    </a>
                </HeadDetailGlobal>
                <HeadDetailGlobal style={{ padding: '0 48px 0 48px', width: 'auto', color: '#6E8098', display: 'inline-block' }}>
                    <PContent>{description}</PContent>
                    <TitleContent>Requirements</TitleContent>
                    <PContent>{requirements.content}</PContent>
                    <UlContent>
                        <LiContent>{reqItems[0]}</LiContent>
                        <LiContent>{reqItems[1]}</LiContent>
                        <LiContent>{reqItems[2]}</LiContent>
                    </UlContent>
                    <TitleContent>What You Will Do</TitleContent>
                    <PContent>{role.content}</PContent>
                    <OlContent>
                        <LiContent>{rolItems[0]}</LiContent>
                        <LiContent>{rolItems[1]}</LiContent>
                        <LiContent>{rolItems[2]}</LiContent>
                    </OlContent>
                </HeadDetailGlobal >
            </ContainerDetail >

        </>

    )
}

export default JobDetailContent;