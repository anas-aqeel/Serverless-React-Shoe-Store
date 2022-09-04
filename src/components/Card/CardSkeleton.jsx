import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Skeleton from "@mui/material/Skeleton";
import { Grid } from "@mui/material";

function Media() {
    return (
        <Card
            sx={{
                maxWidth: "100%",
                minWidth: "100%",
                m: 2,
                backgroundColor: "#ffffff08",
            }}
        >
            <Skeleton
                sx={{ height: 190, backgroundColor: "#101418" }}
                animation="wave"
                variant="rectangular"
            />
            <CardContent>
                <React.Fragment>
                    <Skeleton
                        sx={{ backgroundColor: "#101418" }}
                        animation="wave"
                        height={18}
                        width="85%"
                        style={{ marginBottom: 8 }}
                    />
                    <Skeleton
                        sx={{ backgroundColor: "#101418" }}
                        animation="wave"
                        height={10}
                    />
                    <Skeleton
                        sx={{ backgroundColor: "#101418" }}
                        animation="wave"
                        height={10}
                        width="90%"
                    />
                    <Skeleton
                        sx={{ backgroundColor: "#101418" }}
                        animation="wave"
                        height={10}
                        width="80%"
                    />
                    <Skeleton
                        sx={{ backgroundColor: "#101418" }}
                        animation="wave"
                        height={10}
                        width="87%"
                    />
                </React.Fragment>
            </CardContent>
        </Card>
    );
}

export default function CardSkeleton() {
    return (
        <Grid
            spacing={2}
            container
            style={{
                margin:'30px auto',
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {[1, 2,4,5,6,7,7,3].map(() => (
                <Grid item lg={3} md={3} sm={6} xs={10} sx={{}}>
                    <Media />
                </Grid>
            ))}

        </Grid>
    );
}
