import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabPanels from '../TabPanels/TabPanels';

const Tub = () => {
    const [lionData, setLionData] = useState([])
    const [tigerData, setTigerData] = useState([])
    const [zebraData, setZebraData] = useState([])

    useEffect(() => {

        fetch('https://b7a11-toy-marketplace-server-side-aalnoman10.vercel.app/lions')
            .then(res => res.json())
            .then(data => {
                setLionData(data)
            })

        fetch('https://b7a11-toy-marketplace-server-side-aalnoman10.vercel.app/tigers')
            .then(res => res.json())
            .then(data => setTigerData(data))

        fetch('https://b7a11-toy-marketplace-server-side-aalnoman10.vercel.app/zebras')
            .then(res => res.json())
            .then(data => setZebraData(data))

    }, [])

    return (
        <div className='bg-slate-100 py-5'>
            <h3 className="text-3xl font-semibold text-center pb-4">Sob By Category</h3>
            <Tabs className='my-4 '>
                <TabList className='flex justify-center w-9/12 mx-auto md:mb-0 mb-4'>
                    <Tab className='w-1/3 font-semibold inline p-3 bg-purple-400 text-center'>Lion</Tab>
                    <Tab className='w-1/3 font-semibold inline p-3 bg-purple-400 text-center'>Tiger</Tab>
                    <Tab className='w-1/3 font-semibold inline p-3 bg-purple-400 text-center'>Zebra</Tab>
                </TabList>

                <TabPanel className="w-11/12 mx-auto">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {
                            lionData.map(animal => <TabPanels
                                key={animal._id}
                                animal={animal}
                            ></TabPanels>)
                        }
                    </div>
                </TabPanel>
                <TabPanel className="w-11/12 mx-auto">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {
                            tigerData.map(animal => <TabPanels
                                key={animal.id}
                                animal={animal}
                            ></TabPanels>)
                        }
                    </div>
                </TabPanel>
                <TabPanel className="w-11/12 mx-auto">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {
                            zebraData.map(animal => <TabPanels
                                key={animal.id}
                                animal={animal}
                            ></TabPanels>)
                        }
                    </div>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default Tub;