import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
  } from 'sequelize-typescript';
  import { User } from '../users/user.entity';
  
  @Table({
    tableName: 'todo',
    createdAt: true,
    updatedAt: true,
  })
  export class Todo extends Model<Todo> {
    @Column({
      primaryKey: true,
      autoIncrement: true,
      type: DataType.INTEGER,
      allowNull: false,
    })
    todo_id: number;

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
      due_date: string;
    
      @Column({
        type: DataType.VIRTUAL,
        get() {
          const date = this.getDataValue('due_date');
          // Format date using JavaScript methods or a library
          return date.toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
          });
        },
      })
      formattedDate: string;

      @Column({
        type: DataType.INTEGER,
        allowNull: false,
      })
      priority: number;

      @Column({
        type: DataType.ENUM,
        values: ['pending', 'completed'],
        allowNull: false,
    })
    status: string;

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
  