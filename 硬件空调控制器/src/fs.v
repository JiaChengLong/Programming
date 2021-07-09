module fs(key1,ak0,clk,HEX7,LED);
input key1;//打开风速模式
input ak0; //按键增加风速
input clk; //时钟信号
reg [1:0]abc;  //用来判断七段译码管
output reg [7:0] HEX7;
output  LED; 
reg LED;
always @(posedge ak0)
	if(key1==1'b1)
	begin
	if(abc==2'b00)
		abc<=abc+2'b01; 
	else if(abc==2'b01)
		abc<=abc+2'b01;
	else if(abc==2'b10)
		abc<=abc+2'b01;
	else if(abc==2'b11)
		abc<=2'b00;
	end
	else abc<=2'b00;
always @(posedge clk)
	if(key1==1'b1)
begin
	LED<=1'b1;
case(abc[1:0])
  2'b00:HEX7=(8'hf9);
  2'b01:HEX7=(8'ha4);
  2'b10:HEX7=(8'hb0);
  2'b11:HEX7=(8'h99);
  default :HEX7=(8'hf9);
  endcase
  end
  else
  begin
  LED<=1'b0;
  HEX7<=8'h80;
  end
endmodule