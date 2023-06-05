import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Header, Section, Container, Text } from 'components';
import { Gallery, Todos } from 'tabs';

export const App = () => {
  return (
    <>
      <Header />

      <Section>
        <Container>
          <Tabs>
            <TabList>
              <Tab>
                <Text>Todos</Text>
              </Tab>
              <Tab>
                <Text>Gallery</Text>
              </Tab>
            </TabList>

            <TabPanel>
              <Todos />
            </TabPanel>
            <TabPanel>
              <Gallery />
            </TabPanel>
          </Tabs>
        </Container>
      </Section>
    </>
  );
};
