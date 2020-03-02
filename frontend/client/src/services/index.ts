import PeopleService from "./people-service";
import {IService} from "./model";

class Service implements IService {
    public peopleService = new PeopleService();
}

const service = new Service();

const getService = () => service;

export default getService;
