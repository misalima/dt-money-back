import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTransactionDTO } from './dto/create-transaction.dto';
import { UpdateTransactionDTO } from './dto/update-transaction-dto';

@Controller('/app/transaction')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('/')
  async createTransaction(@Body() data: CreateTransactionDTO) {
    const createdTransaction = await this.appService.createTransaction(data);
    return createdTransaction;
  }
  @Get('/')
  async listAll() {
    const transactions = await this.appService.listAll();
    return transactions;
  }

  @Put('/:id')
  async updateTransaction(@Param('id') id: string, @Body() data: UpdateTransactionDTO) {
    const updatedTransaction = await this.appService.updateTransaction(id, data);
    return updatedTransaction;
  }

  @Delete('/:id')
  async deleteTransaction(@Param('id') id: string) {
    const deletedTransaction = await this.appService.deleteTransaction(id);
    return deletedTransaction;
  }
}
