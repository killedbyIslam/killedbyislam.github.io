// Mantine
import {
    Container,
    createStyles,
    SimpleGrid,
    Text,
    Title,
} from "@mantine/core";
import ffddddd from "../assets/ffddddd.jpg";
import hezbolaaa from "../assets/33240.jpg";
import dddddeeedssaa from "../assets/dddddeeedssaa.jpg"
// Components
import BoxWrapper from "./BoxWrapper";
// motion
import { motion } from "framer-motion";
// mock
import { tech } from "../_mock/tech";

// ----------------------------------------------------------------------------

const useStyles = createStyles((theme) => ({
    title: {
        color:
            theme.colorScheme === "dark"
                ? theme.colors.yellow[4]
                : theme.colors.orange[4],
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: theme.fontSizes.lg,
        marginTop: theme.spacing.lg,
        marginBottom: theme.spacing.lg,
        lineHeight: 1.2,
        fontWeight: 800,

        [theme.fn.smallerThan("xs")]: {
            fontSize: 28,
        },
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 15,
        padding: 5,
        // boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        // shadow color based on theme
        boxShadow: `0 0 10px ${
            theme.colorScheme === "dark"
                ? theme.colors.white[3]
                : theme.colors.gray[7]
        }`,
    },
}));

export default function Skills() {
    const { classes } = useStyles();
    return (
        <Container px="xl" size="lg" style={{minWidth: "350px"}}>
            <BoxWrapper withBackground={true}>
                {/* {tech.map((item: any, index: number) => (
          <div key={index}>
            <Title
              order={1}
              sx={(theme) => ({
                marginBottom: 10,
                marginTop: 10,
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.yellow[5]
                    : theme.colors.orange[5],
              })}
            >
              {item.title}
            </Title>
            <Text>{item.description}</Text>
            {item.data.map((dataItem: any, index: number) => (
              <div key={index}>
                <Text className={classes.title}>{dataItem.type}</Text>
                <SimpleGrid
                  cols={12}
                  spacing="lg"
                  breakpoints={[
                    { maxWidth: 980, cols: 7, spacing: "md" },
                    { maxWidth: 755, cols: 5, spacing: "sm" },
                    { maxWidth: 600, cols: 4, spacing: "sm" },
                    { maxWidth: 450, cols: 3, spacing: "sm" },
                  ]}
                >
                  {dataItem.webp.map((subDataitem: any) => (
                    <motion.img
                      key={subDataitem}
                      alt={subDataitem}
                      className={classes.img}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.8 }}
                      src={subDataitem}
                      // alt={subDataitem}
                    />
                  ))}
                </SimpleGrid>
              </div>
            ))}
          </div>
        ))} */}
                <div>
                    <div style={{overflow: "hidden"}}>
                        <a href="https://en.wikipedia.org/wiki/Liwa_Fatemiyoun" style={{fontSize: "32px", fontWeight: "monospace"}}>
                            Designation as terrorist organization
                        </a>
                        <p>
                            Liwa Fatemiyoun (Arabic: لِوَاء الْفَاطِمِيُّون,
                            romanized: Liwā’ al-Fāṭimīyūn; Persian/Dari: لواء
                            فاطمیون or لشکر فاطمیون), literally "Fatimid
                            Banner", also known as Fatemiyoun Division or
                            Fatemiyoun Brigade,[3] is an Afghan Shia militia
                            formed in 2014 to fight in Syria on the side of the
                            Syrian government. The group's officially designated
                            purpose, is the defense of the shrine of Zaynab bint
                            Ali, and to fight "takfiri terrorists" in Syria,
                            which would come to include the Islamic State
                            (IS).[26][27] It is funded, trained, and equipped by
                            the Islamic Revolutionary Guard Corps (IRGC), and
                            fights under the command of Iranian officers.[4]
                            Both the Fatemiyoun Brigade and the Iranian
                            government downplay their relationship with one
                            another, despite clear coordination and the
                            brigade's operation under the auspices of the
                            IRGC.[4] Liwa Fatemiyoun is also closely associated
                            with Hezbollah Afghanistan.[4]
                        </p>
                        <img src={ffddddd} width="500px" style={{minWidth: "250px"}} />
                    </div>
                    <div style={{display: "flex", alignItems: "center", flexDirection: "column", overflow: "hidden"}}>
                        <a href="https://en.wikipedia.org/wiki/Hezbollah" style={{fontSize: "38px", fontWeight: "monospace"}}>
                            Hezbollah
                        </a>
                        <p>
                            A group of Shiites influenced by the theocratic
                            government in Iran—the region’s major Shiite
                            government, which came to power in 1979—took up arms
                            against the Israeli occupation. Seeing an
                            opportunity to expand its influence in Arab states,
                            Iran and its Islamic Revolutionary Guard Corps
                            (IRGC) provided funds and training to the budding
                            militia, which adopted the name Hezbollah, meaning
                            “The Party of God.” It earned a reputation for
                            extremist militancy due to its frequent clashes with
                            rival Shiite militias, such as the Amal Movement,
                            and its attacks on foreign targets, including the
                            1983 suicide bombing of barracks housing U.S. and
                            French troops in Beirut, in which more than three
                            hundred people died. Hezbollah became a vital asset
                            to Iran, bridging Shiite Arab-Persian divides as
                            Tehran established proxies throughout the Middle
                            East.
                        </p>
                        <img src={hezbolaaa} width="500px" style={{minWidth: "250px"}} />
                    </div>
                    <div style={{display: "flex", alignItems: "end", flexDirection: "column", overflow: "hidden"}}>
                        <a href="https://en.wikipedia.org/wiki/Houthi_movement" style={{fontSize: "55px", fontWeight: "monospace"}}>
                            Ansar Allah
                        </a>
                        <p>
                            The US designation of Ansar Allah as a Foreign
                            Terrorist Organisation, in addition to the
                            designation of three of its leaders, risks rendering
                            UN-led efforts to reach a comprehensive solution to
                            the Yemen conflict more difficult. It will
                            complicate the necessary diplomatic engagement with
                            Ansar Allah and the work of the international
                            community on political, humanitarian and
                            developmental matters.
                        </p>
                        <img src={dddddeeedssaa} width="500px" style={{minWidth: "350px"}} />
                    </div>
                </div>
            </BoxWrapper>
        </Container>
    );
}
