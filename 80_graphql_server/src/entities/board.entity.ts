import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Board {
  // @PrimaryGeneratedColumn("uuid")
  @PrimaryGeneratedColumn("increment")
  public number: number;

  @Column({ type: "text" })
  public writer: string;

  @Column({ type: "text" })
  public title: string;

  @Column({ type: "text" })
  public contents: string;

  constructor(number: number, writer: string, title: string, contents: string) {
    this.number = number;
    this.writer = writer;
    this.title = title;
    this.contents = contents;
  }
}
