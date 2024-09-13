// Mantine
import { useEffect, useState } from "react";
import {
    Button,
    createStyles,
    Group,
    Skeleton,
    Grid,
    SimpleGrid,
    Text,
    Textarea,
    TextInput,
    Title,
    Anchor,
} from "@mantine/core";
import RepositoryCard from "./RepositoryCard";
import killedbyisl from "../assets/killedby-ezgif.com-video-to-gif-converter.gif";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
// components
import BoxWrapper from "./BoxWrapper";
import { ContactIconsList } from "./ContactIcons";
// utils
import emailjs from "emailjs-com";
import { Check } from "tabler-icons-react";
// config
import { serviceId, templateId, userId } from "../config";

// -----------------------------------------------------------

const useStyles = createStyles((theme) => ({
    wrapper: {
        minHeight: 400,
        minWidth: 600,
        boxSizing: "border-box",
        backgroundImage: `linear-gradient(-60deg, ${theme.colors.orange[4]} 0%, ${theme.colors.white[7]} 100%)`,
        borderRadius: theme.radius.md,
        padding: theme.spacing.xl,

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            padding: theme.spacing.xl,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        lineHeight: 1,
    },

    description: {
        maxWidth: 300,

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            maxWidth: "100%",
        },
    },

    form: {
        backgroundColor:
            theme.colorScheme === "dark"
                ? theme.colors.dark[7]
                : theme.colors.gray[0],
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        boxShadow: theme.shadows.lg,
    },

    social: {
        // color: theme.white,

        "&:hover": {
            color: theme.colors[theme.primaryColor][1],
        },
    },

    control: {
        backgroundColor:
            theme.colorScheme === "dark"
                ? theme.colors.yellow[5]
                : theme.colors.orange[4],

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.yellow[6]
                    : theme.colors.green[4],
        },
    },
}));

export function Contact() {
    const [repos, setRepos] = useState<any>([]);

    const fetchData = async () => {
        const res = await fetch(
            "https://api.github.com/users/killedbyislam/repos"
        );
        const data = await res.json();
        setRepos(
            data
                .sort(
                    (a: any, b: any) => b.stargazers_count - a.stargazers_count
                )
                .slice(0, 9)
        );
    };

    useEffect(() => {
        fetchData();
    }, []);
    const { classes } = useStyles();

    const form = useForm({
        initialValues: {
            email: "",
            name: "",
            message: "",
        },

        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "Invalid email",
            name: (value) => (value.length > 0 ? null : "Name is required"),
            message: (value) =>
                value.length > 0 ? null : "Message is required",
        },
    });

    // const onSubmit = (values: any) => {
    //     try {
    //         emailjs
    //             .send(serviceId, templateId, values, userId)
    //             .then((result) => {
    //                 showNotification({
    //                     title: "Success",
    //                     message: "Your message has been sent, ! ! 🤩",
    //                     color: "green",
    //                     icon: <Check />,
    //                 });
    //                 form.reset();
    //             });
    //     } catch (error) {
    //         showNotification({
    //             title: "Error",
    //             message: "An error occurred while sending your message",
    //             color: "red",
    //         });
    //     }
    // };

    return (
        <BoxWrapper>
            <SimpleGrid
                cols={2}
                spacing={50}
                breakpoints={[{ maxWidth: "sm", cols: 1 }]}
            >
                <div>
                    <Title className={classes.title}>
                        List of victims during the Mahsa Amini protests
                    </Title>
                    <Text className={classes.description} mt="sm" mb={30}>
                        The documentation from HRANA (1), IranWire (2), Der
                        Spiegel (3), Amnesty International (4), Iran Human
                        Rights (5) and NCRI (6) regularly includes the names of
                        the fatalities and, where ascertained, their ages and
                        the date, place and cause of death. The following list
                        presents the most important published information in
                        chronological order.
                    </Text>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <img src={killedbyisl} alt="" height={"459px"} width={"359px"} />
                    <Anchor
                        href="https://en.wikipedia.org/wiki/Deaths_during_the_Mahsa_Amini_protests"
                        variant="gradient"
                        gradient={{ from: "pink", to: "yellow" }}
                        fw={500}
                        fz="lg"
                        target="_blank"
                        underline="always"
                        style={{backgroundColor: "black", padding: "5px", marginTop: "5px", color: "red"}}
                    >
                        List of victims
                    </Anchor>
                    </div>
                </div>
                <div className="victims">
                    <Grid>
                        {repos.length > 0
                            ? repos
                                  .slice(0, 6)
                                  .map((repo: any, index: number) => (
                                      <Grid.Col
                                          sm={12}
                                          md={6}
                                          lg={4}
                                          key={index}
                                      >
                                          <RepositoryCard
                                              title={repo.name}
                                              description={repo.description}
                                              language={repo.language}
                                              url={repo.svn_url}
                                              created_at={repo.created_at}
                                              stargazers_count={
                                                  repo.stargazers_count
                                              }
                                              forks_count={repo.forks_count}
                                          />
                                      </Grid.Col>
                                  ))
                            : Array.from(Array(6)).map((_, index) => (
                                  <Grid.Col sm={12} md={6} lg={4} key={index}>
                                      <Skeleton
                                          height={150}
                                          sx={{ minWidth: 175 }}
                                          radius="xl"
                                      />
                                  </Grid.Col>
                              ))}
                    </Grid>
                </div>
            </SimpleGrid>
        </BoxWrapper>
    );
}
