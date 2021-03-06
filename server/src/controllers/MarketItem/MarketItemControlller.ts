import { Request, response, Response } from 'express';

import MarketItem from "../../entities/MarketItem"

class MarketItemController {
  
  async create(request: Request, response: Response): Promise<Response> {
    const {      
      name,
      description,
      price,
      tag,      
      image_url
    } = request.body    
    
    if (!name || !description || !tag || !price || !image_url) {
      return response.status(400).json({message: 'Empty fields are not valid!'})
    }

    const marketItemAlreadyExist = await MarketItem.findOne({ _id: request.params.id })

    if (marketItemAlreadyExist) {
      return response.status(400).json({message: 'This item already exists!'})
    }

    const marketItem = await MarketItem.create({name, description, tag, price, image_url})

    await MarketItem.findByIdAndUpdate(marketItemAlreadyExist, { $push: { marketItem } })

    return response.status(201).json(marketItem)
    
  };

  async getAll(request: Request, response: Response): Promise<Response> {
    const marketItems = await MarketItem.find({})

    return response.status(200).json(marketItems)
  }
  
  async findByTag(request: Request, response: Response): Promise<Response> {
    
    const findByTag = await MarketItem.find({tag: request.params.tag})

    if(!findByTag) {
      return response.status(404).json({message: 'This tag does not exist!'})
    }

    return response.status(200).json(findByTag)
    
  }
  
  async findByFavorite(request: Request, response: Response): Promise<Response> {        
    const findByStatus = await MarketItem.find({ status: true})
    
    if (!findByStatus) {
      return response.status(400).json([])
    }

    return response.status(200).json(findByStatus)
  }

  async updateToFavorite(request: Request, response: Response): Promise<Response> {
    const updates = request.body;
    const _id = request.body.id

    await MarketItem.findByIdAndUpdate(_id, updates)

    return response.status(200).json(updates)        
  } 

  async delete(request: Request, response: Response): Promise<Response> {
    const _id = request.params.id
    await MarketItem.findByIdAndDelete(_id)

    return response.status(200).json({message: "Item successful deleted!"})
  }
}

export { MarketItemController }