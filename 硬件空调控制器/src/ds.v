module ds(key5,clk,ak3,HEX3,HEX2,LED5,dsk,key10);
input key5;
input clk;
input ak3;
input key10;
output reg dsk;
output reg[7:0]HEX3;
output reg[7:0]HEX2;
output reg LED5;
reg [3:0]av;//低位
reg [3:0]bv;//高位
initial
begin
	dsk=1'd0;
end
always @(posedge ak3)
begin
	if(key5==1'd1)
	begin
	  if((av==4'b0100)&&(bv==4'b0010))
	begin
		av<=4'b0000;bv<=4'b0000;
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
	if(key10==1'd1)
	begin
		if((av==4'd0000)&&(bv==4'b0000))
		begin
			av<=4'b1000; bv<=4'b1000; dsk<=1'd1;
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
	else if(key10==1'd0)
		dsk<=1'd0;
	end
always @(posedge clk)
	if(key5==1'd1)
	begin
	LED5<=1'd1;
	case(bv[3:0])
	4'b0000:HEX3=(8'hc0);
	4'b0001:HEX3=(8'hf9);
	4'b0010:HEX3=(8'ha4);
	4'b0011:HEX3=(8'hb0);
	4'b0100:HEX3=(8'h99);
	4'b0101:HEX3=(8'h92);
	4'b0110:HEX3=(8'h82);
	4'b0111:HEX3=(8'hf8);
	4'b1000:HEX3=(8'h80);
	4'b1001:HEX3=(8'h90);
	default :HEX3=(8'hf9);
	endcase
	case(av[3:0])
	4'b0000:HEX2=(8'hc0);
	4'b0001:HEX2=(8'hf9);
	4'b0010:HEX2=(8'ha4);
	4'b0011:HEX2=(8'hb0);
	4'b0100:HEX2=(8'h99);
	4'b0101:HEX2=(8'h92);
	4'b0110:HEX2=(8'h82);
	4'b0111:HEX2=(8'hf8);
	4'b1000:HEX2=(8'h80);
	4'b1001:HEX2=(8'h90);
	default :HEX2=(8'ha4);
	endcase
	end
	else
	begin
	LED5<=1'd0;
	HEX2<=8'h80;
	HEX3<=8'h80;
	end
endmodule