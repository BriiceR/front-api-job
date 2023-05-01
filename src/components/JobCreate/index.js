import MainHeader from "../Header/Header";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, } from '../SearchBar/SearchBar';
import { ContainerDetail } from '../JobDetail/JobDetail';
import { Input, Textarea, Div } from "../JobUpdate/index";


const JobCreate = () => {

    const [job, setJob] = useState(null);
    const [newPosition, setNewPosition] = useState("");
    const [newCompany, setNewCompany] = useState("");
    const [newLogo, setNewLogo] = useState("");
    const [newLogoBackground, setNewLogoBackground] = useState("");
    const [newContract, setNewContract] = useState("");
    const [newLocation, setNewLocation] = useState("");
    const [newWebsite, setNewWebsite] = useState("");
    const [newApply, setNewApply] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newContent, setNewContent] = useState("");
    const [newItems, setNewItems] = useState([]);
    const [newContent2, setNewContent2] = useState("");
    const [newItems2, setNewItems2] = useState([]);
    const [newPositionAt, setNewPositionAt] = useState("");

    const handlePositionChange = (event) => {
        setJob({ ...job, position: event.target.value });
        setNewPosition(event.target.value);
    };

    const handleCompanyChange = (event) => {
        setJob({ ...job, company: event.target.value });
        setNewCompany(event.target.value);
    };

    const handleLogoChange = (event) => {
        setJob({ ...job, logo: event.target.value });
        setNewLogo(event.target.value);
    };

    const handleLogoBackgroundChange = (event) => {
        setJob({ ...job, logoBackground: event.target.value });
        setNewLogoBackground(event.target.value);
    };

    const handleContractChange = (event) => {
        setJob({ ...job, contract: event.target.value });
        setNewContract(event.target.value);
    };

    const handleLocationChange = (event) => {
        setJob({ ...job, location: event.target.value });
        setNewLocation(event.target.value);
    };

    const handleWebsiteChange = (event) => {
        setJob({ ...job, website: event.target.value });
        setNewWebsite(event.target.value);
    };

    const handleApplyChange = (event) => {
        setJob({ ...job, apply: event.target.value });
        setNewApply(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setJob({ ...job, description: event.target.value });
        setNewDescription(event.target.value);
    };

    const handleContentChange = (event) => {
        setJob({ ...job, content: event.target.value });
        setNewContent(event.target.value);
    };

    const handleItemsChange = (event) => {
        setJob({ ...job, items: event.target.value });
        setNewItems(event.target.value);
    };

    const handleContent2Change = (event) => {
        setJob({ ...job, content2: event.target.value });
        setNewContent2(event.target.value);
    };

    const handleItems2Change = (event) => {
        setJob({ ...job, items2: event.target.value });
        setNewItems2(event.target.value);
    };

    const handlePositionAtChange = (event) => {
        setNewPositionAt({ ...job, positionAt: event.target.value });
        setNewPositionAt(event.target.value);
    };

    const handleCreate = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/jobs`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    position: newPosition,
                    company: newCompany,
                    logo: newLogo,
                    logoBackground: newLogoBackground,
                    contract: newContract,
                    location: newLocation,
                    website: newWebsite,
                    apply: newApply,
                    description: newDescription,
                    requirements: {
                        content: newContent,
                        items: newItems
                    },
                    role: {
                        content: newContent2,
                        items: newItems2
                    },
                    positionAt: newPositionAt

                })

            });

            if (response.ok) {
                console.log('creat ok');
            } else {
                console.error('Erreur create');
                console.log(response)
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <MainHeader />
            <ContainerDetail style={{ backgroundColor: '#939BF4', marginTop: -80, borderRadius: 6, textAlign: 'center', fontSize: 20 }}>

                <h2 style={{ padding: 40, color: 'white' }}>Create new Job</h2>
                <form onSubmit={handleCreate} style={{ justifyContent: 'center', display: 'inline-block' }}>
                    <Div>
                        <label htmlFor="position">Position:</label>
                        <Input
                            type="text"
                            id="position"
                            value={newPosition}
                            onChange={handlePositionChange}
                        />
                    </Div>
                    <Div>
                        <label htmlFor="company">Company:</label>
                        <Input
                            type="text"
                            id="company"
                            value={newCompany}
                            onChange={handleCompanyChange}
                        />
                    </Div>
                    <Div>
                        <label htmlFor="logo">Logo:</label>
                        <Input
                            type="text"
                            id="logo"
                            value={newLogo}
                            onChange={handleLogoChange}
                        />
                    </Div>
                    <Div>
                        <label htmlFor="logoBackground">Logo Background:</label>
                        <Input
                            type="text"
                            id="logoBackground"
                            value={newLogoBackground}
                            onChange={handleLogoBackgroundChange}
                        />
                    </Div>
                    <Div>
                        <label htmlFor="contract">Contract:</label>
                        <Input
                            type="text"
                            id="contract"
                            value={newContract}
                            onChange={handleContractChange}
                        />
                    </Div>
                    <Div>
                        <label htmlFor="location">Location:</label>
                        <Input
                            type="text"
                            id="location"
                            value={newLocation}
                            onChange={handleLocationChange}
                        />
                    </Div>
                    <Div>
                        <label htmlFor="website">Website:</label>
                        <Input
                            type="text"
                            id="website"
                            value={newWebsite}
                            onChange={handleWebsiteChange}
                        />
                    </Div>
                    <Div>
                        <label htmlFor="apply">Apply:</label>
                        <Input
                            type="text"
                            id="apply"
                            value={newApply}
                            onChange={handleApplyChange}
                        />
                    </Div>
                    <Div>
                        <label htmlFor="description">Description:</label>
                        <Textarea
                            id="description"
                            value={newDescription}
                            onChange={handleDescriptionChange}
                        />
                    </Div>
                    <Div>
                        <label htmlFor="content">Content:</label>
                        <Textarea
                            id="content"
                            value={newContent}
                            onChange={handleContentChange}
                        />
                    </Div>
                    <Div>
                        <label htmlFor="items">Items:</label>
                        <Input
                            type="text"
                            id="items"
                            value={newItems}
                            onChange={handleItemsChange}
                        />
                    </Div>
                    <Div>
                        <label htmlFor="content2">Content2:</label>
                        <Textarea
                            id="content2"
                            value={newContent2}
                            onChange={handleContent2Change}
                        />
                    </Div>
                    <Div>
                        <label htmlFor="items2">Items2:</label>
                        <Input
                            type="text"
                            id="items2"
                            value={newItems2}
                            onChange={handleItems2Change}
                        />
                    </Div>
                    <Div>
                        <label htmlFor="positionAt">PositionAt:</label>
                        <Input
                            type="text"
                            id="positionAt"
                            value={newPositionAt}
                            onChange={handlePositionAtChange}
                        />
                    </Div>
                    <Button style={{ marginBottom: 40 }} type="submit">Create</Button>
                    <Link style={{ textDecoration: 'none' }} to={'/'} >
                        <Button style={{ marginBottom: 40 }}>Back to Jobs</Button>
                    </Link>
                </form>

            </ContainerDetail>
        </>
    )
};

export default JobCreate;