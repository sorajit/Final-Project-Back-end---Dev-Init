import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
  } from 'sequelize-typescript';
  import { User } from '../users/user.entity';
import { ForbiddenException } from '@nestjs/common';
  
  @Table({
    tableName: 'events',
    createdAt: true,
    updatedAt: true,
  })
  export class Event extends Model<Event> {
    @Column({
      primaryKey: true,
      autoIncrement: true,
      type: DataType.INTEGER,
      allowNull: false,
    })
    event_id: number;

    @Column({
      type: DataType.STRING(100),
      allowNull: false,
    })
    title: string;
  
    @Column({
      type: DataType.TEXT,
      allowNull: false,
    })
    description: string;
    
    @Column({
        type: DataType.DATE,
        allowNull: false,
      })
      start_date: string;

      @Column({
        type: DataType.DATE,
        allowNull: false,
      })
      end_date: string;

      @Column({
        type: DataType.VIRTUAL,
        get() {
          const date = this.getDataValue('start_date');
          // Format date using JavaScript methods or a library
          return date.toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: "2-digit",
            minute: "2-digit",
          });
        },
      })
      formatted_startDate: string;

      @Column({
        type: DataType.VIRTUAL,
        get() {
          const date = this.getDataValue('end_date');
          // Format date using JavaScript methods or a library
          return date.toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: "2-digit",
            minute: "2-digit",
          });
        },
      })
      formatted_endDate: string;

    @Column({
      type: DataType.DATE,
      allowNull: false,
      defaultValue: DataType.NOW,
      field: 'created_at',
    })
    createdAt: Date;
  
    @Column({
      type: DataType.DATE,
      allowNull: false,
      defaultValue: DataType.NOW,
      field: 'updated_at',
    })
    updatedAt: Date;
    
    @ForeignKey(() => User)
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    user_id: number;
  
    @BelongsTo(() => User)
    user: User;
  }
  