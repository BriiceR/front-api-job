import styled from '@emotion/styled';


let ContainerCard = styled.div({
    width: 350,
    height: 228,
    backgroundColor: 'white',
    borderRadius: 6,
    boxSizing: 'border-box',
    paddingLeft: 32,
})

let ImgCard = styled.img({
    width: 50,
    height: 50,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginTop: -25,
    borderRadius: 10,
})

export let TextCard = styled.p({
    fontSize: 16,
    color: '#6E8098',
})

let Job = styled.h3({
    color: '#19202D',
    fontSize: 20,
})

export let Location = styled.p({
    color: '#5964E0',
    fontSize: 14,
    fontWeight: 700,
    marginTop: 44,
})



const Card = ({ data }) => {
    const { logo, positionAt, contract, location, position, company, logoBackground } = data;

    return (

        <ContainerCard>
            <ImgCard style={{ backgroundImage: `url(${logo})`, backgroundColor: `${logoBackground}` }} />
            <TextCard>{positionAt} . {contract ? 'Full Time' : 'Part Time'}</TextCard>
            <Job>{position}</Job>
            <TextCard>{company}</TextCard>
            <Location>{location}</Location>
        </ContainerCard>

    );
};

export default Card;