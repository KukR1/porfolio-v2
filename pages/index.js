import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Heyy 😃, I&apos;m a front-end developer based in Netherlands atm!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nikitas Danilov
          </Heading>
          <p>Front-End Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/nik.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Intro
        </Heading>
        <Paragraph>
          Nikitas is a front-end developer, with a passion for building
          everything has to do with front-end tech. He has a knack for all
          things launching products, from planning and designing all the way to
          solving real-life problems with code.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio & Work
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Born in Dneproderzhinsk, Ukraine.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Completed the Bachelor&apos;s Program in London Metropolitan
          University as a Computer Scientist
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked at &quot;
          <NextLink
            href="https://www.linkedin.com/company/escape-game-over-pc/"
            passHref
          >
            <Link target="_blank">Escape Game Over</Link>
          </NextLink>
          &quot;, Athens - Remote
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Worked at &quot;
          <NextLink href="https://www.linkedin.com/company/khyria/" passHref>
            <Link target="_blank">Khyria</Link>
          </NextLink>
          &quot;, US - Remote
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Worked at &quot;
          <NextLink
            href="https://www.linkedin.com/company/leaflets-io/"
            passHref
          >
            <Link target="_blank">Leaflets.io</Link>
          </NextLink>
          &quot;, Netherlands
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>Video Games, Music, Movies and Cats ♥ </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/KukR1" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @KukR1
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/mdanilov96/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Nikitas Danilov
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.instagram.com/nik.danilov_/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @nik.danilov_
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <Link
            href="https://drive.google.com/file/d/1D-1sWkkmP4c64pyOKMS1TtNZousSLBOe/view?usp=sharing"
            target="_blank"
          >
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              CV
            </Button>
          </Link>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
