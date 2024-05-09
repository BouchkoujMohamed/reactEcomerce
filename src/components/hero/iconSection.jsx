import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { Container, Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useMode } from '../../theme';

export default function IconSection() {
    return (
        <Container  sx={{width:"80%",pt:3 }}>
            <Stack  sx={{flexWrap:"wrap"}} direction={"row"} alignItems={"center"}
                divider={useMediaQuery('(min-width:600px)')?<Divider orientation="vertical" flexItem />:null}
                >
                <MyBox icons={<ElectricBoltIcon/>} title="fast delivery" subtitle="start from $ 10"/>
                <MyBox icons={<CreditScoreIcon/>}title="Money Guarantee" subtitle="7 Days Back"/>
                <MyBox icons={<WorkspacePremiumIcon sx={{}}/>}title="365 Days" subtitle="for free return"/>
                <MyBox icons={<AccessAlarmIcon/> } title="Payment" subtitle="Secure system"/>
            </Stack>
        </Container>
    )
}

const MyBox=({icons,title,subtitle})=> {
    const Themes=useTheme();
    const [theme] = useMode();
    return (
        <Box  
        // @ts-ignore
        bgcolor={theme.palette.mode=="light" ? "#0909094e":"#000"}
        sx={{width:200,
                display:"flex",
                flexGrow:1,
                alignItems:"center",
                gap:3,py:1,
                // @ts-ignore
                justifyContent: useMediaQuery('(min-width:600px)')?"center":"left"
                }}>
            {icons}
            <Box>
                <Typography variant='body1'>{title}</Typography>
                <Typography sx={{fontWeight:300, color:Themes.palette.text.secondary}} variant='body1'>{subtitle}</Typography>
            </Box>
        </Box>
    )
}
