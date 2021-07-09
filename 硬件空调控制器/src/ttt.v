module ttt(key3,ak2,HEX5,HEX4,LED3,clk,key4,key6,sl,HEX1);
input key3;
input key4;
input ak2;
input clk;
input key6;
output reg sl;
output reg[7:0]HEX5;
output reg[7:0]HEX4;
output reg[7:0]HEX1;
output LED3;
reg LED3;
reg [3:0]av;//低位
reg [3:0]bv;//高位
reg [2:0] sj;//用来显示时间
initial
begin
av=4'b0010;bv=4'b0010;
end
always @(posedge ak2)
begin
	if(key3==1'b1)
	begin
	  if((av==4'b0000)&&(bv==4'b0011))
	begin
		av<=4'b0000;bv<=4'b0011;
	end
	else if(av==4'b1001)
	begin
		av<=4'b0000;bv<=bv+4'b0001;
	end
	else
	begin
		bv<=bv;av<=av+4'b0001;
	end
	end
	if(key4==1'b1)
	begin
		if((av==4'b0110)&&(bv==4'b0001))
		begin
			av<=4'b0110;bv<=4'b0001;
		end
		else if(av==4'b0000)
		begin
			av<=4'b1001;bv<=bv-4'b0001;
		end
		else
		begin
			bv<=bv;av<=av-4'b0001;
		end
	end
	if(key6==1'b1)
	begin
		sj<=3'b000;
		av<=4'b0010;
		bv<=4'b0010;
		sl<=1'd0;
		sj<=sj+3'b001;
		if(sj==3'b001)
	begin
		bv<=bv;	av<=av+4'b0001;
	end
	else if(sj==3'b010)
	begin
		bv<=bv;	av<=av+4'b0001;
	end
	else if(sj==3'b101)
	begin
		bv<=bv; av<=av-4'b0001;
	end
	else if(sj==3'b111)
	begin
		bv<=4'b1000; av<=4'b1000; sl<=1'd1;
	end
	end
	else if(key6==1'd0)
		sl<=1'd0;
end
always @(posedge clk)
	if(key3==1'b1)
	begin
	LED3<=1'b1;
	case(av[3:0])
	4'b0000:HEX4=(8'hc0);
	4'b0001:HEX4=(8'hf9);
	4'b0010:HEX4=(8'ha4);
	4'b0011:HEX4=(8'hb0);
	4'b0100:HEX4=(8'h99);
	4'b0101:HEX4=(8'h92);
	4'b0110:HEX4=(8'h82);
	4'b0111:HEX4=(8'hf8);
	4'b1000:HEX4=(8'h80);
	4'b1001:HEX4=(8'h90);
	default :HEX4=(8'hf9);
	endcase
	case(bv[3:0])
	4'b0000:HEX5=(8'hc0);
	4'b0001:HEX5=(8'hf9);
	4'b0010:HEX5=(8'ha4);
	4'b0011:HEX5=(8'hb0);
	4'b0100:HEX5=(8'h99);
	4'b0101:HEX5=(8'h92);
	4'b0110:HEX5=(8'h82);
	4'b0111:HEX5=(8'hf8);
	4'b1000:HEX5=(8'h80);
	4'b1001:HEX5=(8'h90);
	default :HEX5=(8'ha4);
	endcase
	case(sj[2:0])
	4'b0000:HEX1=(8'hc0);
	4'b0001:HEX1=(8'hf9);
	4'b0010:HEX1=(8'ha4);
	4'b0011:HEX1=(8'hb0);
	4'b0100:HEX1=(8'h99);
	4'b0101:HEX1=(8'h92);
	4'b0110:HEX1=(8'h82);
	4'b0111:HEX1=(8'hf8);
	4'b1000:HEX1=(8'h80);
	4'b1001:HEX1=(8'h90);
	default :HEX1=(8'h80);
	endcase
	end
	else 
	begin
	LED3<=1'b0;
	HEX5<=8'h80;
	HEX4<=8'h80;
	HEX1<=8'h80;
	end
endmodule