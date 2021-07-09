module model(key2,ak1,clk,HEX6,LED1,s);
input key2;
input ak1; 
input clk; 
reg [1:0]abc;  //用来判断七段译码管
output reg [7:0] HEX6;
output  LED1; 
output s;
reg s;
reg LED1;
initial
begin
	abc=2'b00;   //标准模式
	s=1'd1;
end
always @(posedge ak1)
begin
	if(key2==1'b1)
begin
	if(abc==2'b00)
begin
	abc<=abc+2'b01;  //除湿模式
	s<=1'd0;
	end
else if(abc==2'b01)
begin
	abc<=abc+2'b01;
	s<=1'd1;
	end
else if(abc==2'b10)  //制冷模式
begin
	abc<=abc+2'b01;
	s<=1'd1;
	end
else if(abc==2'b11)    //制热模式
begin
	abc<=2'b00;
	s<=1'd1;
	end
end
	else
	begin
		abc<=2'b00;
		s<=1'd1;
	end
end
always @(posedge clk)
	if(key2==1'b1)
begin
	LED1<=1'b1;
case(abc[1:0])
  2'b00:HEX6=(8'hc0);
  2'b01:HEX6=(8'hf9);
  2'b10:HEX6=(8'ha4);
  2'b11:HEX6=(8'hb0);
  default :HEX6=(8'hc0);
  endcase
  end
  else
  begin
  LED1<=1'b0;
  HEX6<=8'h80;
  end
endmodule