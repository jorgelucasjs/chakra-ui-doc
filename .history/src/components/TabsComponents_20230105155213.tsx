import React from 'react';
import { Box, Container, Text, Flex, Grid, Button, SimpleGrid, Tabs, TabList, Tab } from '@chakra-ui/react';

export default function TabsComponents(): JSX.Element {
	
	return (
		<div>
			<Tabs>
  <TabList>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
		</div>
	);
}
