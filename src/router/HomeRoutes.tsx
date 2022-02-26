import { Deliverables } from "../components/pages/Deliverables";

export const homeRoutes = [
    {
        path:"/deliverables",
        exact:false,
        children:<Deliverables />
    }
]
