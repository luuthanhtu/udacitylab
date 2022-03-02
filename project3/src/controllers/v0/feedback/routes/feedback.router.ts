import { Router, Request, Response } from 'express';
import { FeedBack } from '../models/FeedBack';
import { requireAuth } from '../../users/routes/auth.router';
import * as AWS from '../../../../aws';

const router: Router = Router();

// Get all feed items
router.get('/', async (req: Request, res: Response) => {
    const items = await FeedBack.findAndCountAll({order: [['id', 'DESC']]});
    items.rows.map((item) => {
            if(item.creator) {
                item.creator = AWS.getGetSignedUrl(item.creator);
            }
    });
    res.send(items);
});

//@TODO
//Add an endpoint to GET a specific resource by Primary Key

// update a specific resource
router.patch('/:id', 
    // requireAuth, 
    async (req: Request, res: Response) => {
        //@TODO try it yourself
        res.status(500).send("not implemented")
});


// Get a signed url to put a new item in the bucket
router.get('/signed-url/:filename',  
    async (req: Request, res: Response) => {
    let { fileName } = req.params;
    const url = AWS.getPutSignedUrl(fileName);
    res.status(201).send({url: url});
});

// Post meta data and the filename after a file is uploaded 
// NOTE the file name is they key name in the s3 bucket.
// body : {caption: string, fileName: string};
router.post('/', 
    async (req: Request, res: Response) => {
    const creator = req.body.creator;
    const description = req.body.description;

    // check Caption is valid
    if (!creator) {
        return res.status(400).send({ message: 'creator is required or malformed' });
    }

    // check Filename is valid
    if (!description) {
        return res.status(400).send({ message: 'description url is required' });
    }

    const item = await new FeedBack({
            creator: creator,
            description: description
    });

    const saved_item = await item.save();

    saved_item.creator = AWS.getGetSignedUrl(saved_item.creator);
    res.status(201).send(saved_item);
});

export const FeedBackRouter: Router = router;