import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import {
  Text,
  Box,
  Stack,
  Button,
  Switch,
  IconButton,
  Tooltip,
  Heading,
  List,
  ListItem,
  Icon,
  ColorModeProvider,
  useColorMode,
  theme,
  ThemeProvider,
  CSSReset,
} from "@chakra-ui/core"
import { RiGatsbyLine } from "react-icons/ri"
import {
  SiNetlify,
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiHtml5,
  SiCss3,
  SiServerless,
  SiNextDotJs,
} from "react-icons/si"
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaReact,
  FaDocker,
  FaAws,
} from "react-icons/fa"

const primaryColor = "teal.500"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  function getNumberYearExperience() {
    const oneYear = 1000 * 60 * 60 * 24 * 365

    const presentDate = new Date()

    const startDay = new Date(2007, 6, 1)

    const Result =
      Math.round(presentDate.getTime() - startDay.getTime()) / oneYear

    return Result.toFixed(0)
  }

  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <SEO title="Software Engineer" />
        <div style={{ position: "relative", minHeight: "100vh" }}>
          <header
            style={{
              position: "absolute",
              top: 0,
              width: "100%",
              height: "6rem",
              paddingLeft: "2rem",
              paddingRight: "2rem",
            }}
          >
            <Stack>
              <Stack
                isInline
                align="center"
                justify="space-between"
                style={{
                  marginBottom: 0,
                }}
              >
                <Heading as="h1" size="2xl" color={primaryColor}>
                  Julien Sanmartin
                </Heading>
                <ColorModeToggle />
              </Stack>
              <Stack
                isInline
                align="center"
                style={{
                  marginBottom: 0,
                }}
              >
                <Text fontSize="2xl" fontWeight="bold">
                  Software Engineer
                </Text>
                <Stack isInline>
                  <Link href="https://github.com/juliensanmartin">
                    <Box
                      as={FaGithub}
                      size="32px"
                      marginLeft="2rem"
                      marginRight="1rem"
                      aria-label="Github"
                    />
                  </Link>
                  <Link href="https://www.linkedin.com/in/julien-sanmartin-aa84bb29/">
                    <Box
                      as={FaLinkedin}
                      size="32px"
                      marginRight="1rem"
                      aria-label="LinkedIn"
                    />
                  </Link>
                  <Link href="https://medium.com/@aldouille">
                    <Box as={FaMedium} size="32px" aria-label="Medium" />
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </header>
          <main
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0 1.0875rem 1.45rem`,
              paddingBottom: "2.5rem",
              paddingTop: "10rem",
            }}
          >
            <Text fontSize="xl" marginBottom="5rem">
              Hello! I'm a Software Engineer in Vancouver, Canada. In the last{" "}
              {getNumberYearExperience()} years I have been building products
              and platforms across a wide range of sectors like Video Streaming,
              Industry 4.0, Business Intelligence and Analytics. I strive for:
              <List styleType="disc" marginLeft="2rem" marginTop="1rem">
                <ListItem>Giving users a first class experience</ListItem>
                <ListItem>
                  Producing clean code and improving codebase in each commit
                </ListItem>
                <ListItem>Learning new things</ListItem>
                <ListItem>Working in agile teams</ListItem>
                <ListItem>Mentoring junior developers</ListItem>
              </List>
            </Text>
            <Stack
              isInline
              align="center"
              fontSize="xl"
              justify="space-between"
            >
              <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                <Box as={SiJavascript} size="42px" aria-label="JavaScript" />
              </Link>
              <Link href="https://reactjs.org/">
                <Box as={FaReact} size="42px" aria-label="React.js" />
              </Link>
              <Link href="https://www.typescriptlang.org/">
                <Box as={SiTypescript} size="42px" aria-label="TypeScript" />
              </Link>
              <Link href="https://nextjs.org/">
                <Box as={SiNextDotJs} size="42px" aria-label="Next.js" />
              </Link>
              <Link href="https://graphql.org/">
                <Box as={SiGraphql} size="42px" aria-label="GraphQL" />
              </Link>
              <Link href="https://aws.amazon.com/">
                <Box as={FaAws} size="42px" aria-label="AWS" />
              </Link>
              <Link href="https://jamstack.org/">
                <Box as={SiServerless} size="42px" aria-label="JAMStack" />
              </Link>
              <Link href="https://www.docker.com/">
                <Box as={FaDocker} size="42px" aria-label="Docker" />
              </Link>
            </Stack>
          </main>
          <footer
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "2.5rem",
              paddingLeft: "2rem",
              paddingRight: "2rem",
            }}
          >
            <Stack isInline justify="space-between" align="center">
              <Text fontSize="md" fontWeight="bold">
                <Link href="mailto:sanmartinjulien@gmail.com">
                  Julien Sanmartin | sanmartinjulien@gmail.com
                </Link>{" "}
                © {new Date().getFullYear()}
              </Text>
              <Stack isInline align="center">
                <Text fontSize="md">Built with</Text>
                <Link href="https://www.gatsbyjs.com/">
                  <Box as={RiGatsbyLine} size="32px" aria-label="Gatsby" />
                </Link>
                <Link href="https://www.netlify.com/">
                  <Box as={SiNetlify} size="32px" aria-label="Netlify" />
                </Link>
              </Stack>
            </Stack>
          </footer>
        </div>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      onClick={toggleColorMode}
      icon={colorMode === "light" ? "sun" : "moon"}
      size="lg"
      isRound
      variant="ghost"
    />
  )
}

export default IndexPage
