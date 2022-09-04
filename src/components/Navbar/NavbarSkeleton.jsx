import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Box, Container, Toolbar } from '@mui/material';

const NavbarSkeleton = () => {
    return (
        <div className="navbar">
            <Container maxWidth="xl" style={{ padding: 0 }}>
                <Toolbar
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#ffffff17",
                    }}
                    disableGutters
                >
                    <Box sx={{ display: { xs: "none", md: "flex" }, flexDirection: 'column' }}>
                        <Skeleton variant="text" width={90} height={15} sx={{ backgroundColor: 'white', fontSize: '1rem' }} />
                        <Skeleton variant="text" width={70} height={15} sx={{ backgroundColor: 'white', fontSize: '1rem' }} />
                    </Box>

                    <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: 'column' }}>
                        <Skeleton variant="text" width={90} height={15} sx={{ backgroundColor: 'white', fontSize: '1rem' }} />
                        <Skeleton variant="text" width={70} height={15} sx={{ backgroundColor: 'white', fontSize: '1rem' }} />
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            justifyContent: "space-between",
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        <Box
                            sx={{ display: "flex", flexGrow: 1, justifyContent: "center" }}
                        >
                            {[1, 2, 3, 4].map((page) => (
                                <Skeleton variant="rounded" width={80} sx={{ mx: 1 }} height={35} />

                            ))}
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <Skeleton variant="rounded" width={40} height={40} />
                            <Skeleton variant="rounded" sx={{ mx: 1 }} width={40} height={40} />
                            <Skeleton variant="rounded" width={40} height={40} />
                        </Box>
                    </Box>

                    <Box
                        sx={{ alignItems: "center", display: { xs: "flex", md: "none" } }}
                    >
                        <Skeleton variant="rounded" width={40} height={40} />
                        <Skeleton variant="rounded" sx={{ mx: 1 }} width={40} height={40} />
                        <Skeleton variant="rounded" width={40} height={40} />

                    </Box>
                </Toolbar>
            </Container>
        </div>
    )
}

export default NavbarSkeleton